import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useProgress, useScroll } from "@react-three/drei";
import { useMemo } from "react";

export default function CameraHandler() {
  const scroll = useScroll();
  const { progress } = useProgress();
  const { width } = useThree((state) => state.size);
  const isMobile = width < 768;

  const points = useMemo(() => {
    const pcOffset = !isMobile && width < 1200 ? (1200 - width) * 0.01 : 0;
    const commonOffset = width < 1200 ? (1200 - width) * 0.01 : 0;

    return {
      posStart: isMobile
        ? new THREE.Vector3(6.5, 4, 3)
        : new THREE.Vector3(
            0.5 + pcOffset * 1.5,
            3 + pcOffset,
            6 + pcOffset * 0.05
          ),
      lookStart: isMobile
        ? new THREE.Vector3(0, 0, 0)
        : new THREE.Vector3(0.5 - pcOffset, 0.5 - pcOffset, 0 - pcOffset * 1.1),
      posWorks: isMobile
        ? new THREE.Vector3(0, 3, 2)
        : new THREE.Vector3(1, 1.5, 1 + pcOffset * 0.2),
      lookWorks: isMobile
        ? new THREE.Vector3(-2, 0, 0)
        : new THREE.Vector3(-3, 1, 0),
      posVision: isMobile
        ? new THREE.Vector3(2, 1, 1.5)
        : new THREE.Vector3(
            0.7 + pcOffset * 0.2,
            0.4 + pcOffset * 0.25,
            0.6 + pcOffset * 0.15
          ),
      lookVision: isMobile
        ? new THREE.Vector3(-5, -1, -5)
        : new THREE.Vector3(-5, -1 - pcOffset * 0.2, -5),
      posSkills: new THREE.Vector3(
        0.3 - commonOffset * 0.05,
        2.5,
        -0.5 - commonOffset * 0.05
      ),
      lookSkills: new THREE.Vector3(3, -10, -3),
      posContact: new THREE.Vector3(
        1.7 - commonOffset * 0.01,
        2 + commonOffset * 0.2,
        2.7 + commonOffset * 0.1
      ),
      lookContact: new THREE.Vector3(1, -3.5 - commonOffset * 0.25, -6),
    };
  }, [width, isMobile]);

  const vPos = useMemo(() => new THREE.Vector3(), []);
  const vLook = useMemo(() => new THREE.Vector3(), []);

  useFrame((state) => {
    if (progress < 100) {
      state.camera.position.copy(points.posStart);
      state.camera.lookAt(points.lookStart);
      return;
    }

    // スクロール範囲の計算
    const r1 = scroll.range(0.15, 0.1);
    const r2 = scroll.range(0.4, 0.1);
    const r3 = scroll.range(0.65, 0.1);
    const r4 = scroll.range(0.9, 0.05);

    vPos.lerpVectors(points.posStart, points.posWorks, r1);
    vLook.lerpVectors(points.lookStart, points.lookWorks, r1);

    if (r2 > 0) {
      vPos.lerpVectors(points.posWorks, points.posVision, r2);
      vLook.lerpVectors(points.lookWorks, points.lookVision, r2);
    }
    if (r3 > 0) {
      vPos.lerpVectors(points.posVision, points.posSkills, r3);
      vLook.lerpVectors(points.lookVision, points.lookSkills, r3);
    }
    if (r4 > 0) {
      vPos.lerpVectors(points.posSkills, points.posContact, r4);
      vLook.lerpVectors(points.lookSkills, points.lookContact, r4);
    }

    state.camera.position.copy(vPos);
    state.camera.lookAt(vLook);
  });

  return null;
}

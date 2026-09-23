'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const PURE_GOLD = '#D4AF37'
const GOLD_BRIGHT = '#FFD700'
const AMBER_GOLD = '#F59E0B'
const WARM_YELLOW = '#FBBF24'
const CHAMPAGNE_WHITE = '#FFFDF5'

/** Floating Golden Bokeh Square Motes */
function GoldenBokehSquares({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const bokehRef = useRef<THREE.Points>(null)
  const count = 64

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5 + 1.5
    }
    return [pos]
  }, [count])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (bokehRef.current) {
      bokehRef.current.rotation.y = Math.sin(t * 0.05) * 0.08
      bokehRef.current.rotation.x = Math.cos(t * 0.04) * 0.05
      bokehRef.current.position.y = Math.sin(t * 0.2) * 0.15 - scrollRef.current * 0.8
    }
  })

  return (
    <points ref={bokehRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        color={PURE_GOLD}
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/** 700+ Particle Constellation & Star Dust */
function StarConstellation({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const whiteRef = useRef<THREE.Points>(null)
  const amberRef = useRef<THREE.Points>(null)
  const count = 720

  const [positions, initialCoords] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const init = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const radius = 3.0 + Math.random() * 7.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      init[i * 3] = x
      init[i * 3 + 1] = y
      init[i * 3 + 2] = z
    }
    return [pos, init]
  }, [count])

  useFrame((state, delta) => {
    const p = scrollRef.current
    const t = state.clock.elapsedTime

    if (whiteRef.current) {
      whiteRef.current.rotation.y += delta * 0.03
      whiteRef.current.rotation.x = t * 0.01

      const positionAttr = whiteRef.current.geometry.attributes.position as THREE.BufferAttribute
      const array = positionAttr.array as Float32Array
      const dispersionFactor = 1 + p * 1.5

      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        array[i3] = initialCoords[i3] * dispersionFactor
        array[i3 + 1] = initialCoords[i3 + 1] * dispersionFactor
        array[i3 + 2] = initialCoords[i3 + 2] * dispersionFactor
      }
      positionAttr.needsUpdate = true
    }

    if (amberRef.current) {
      amberRef.current.rotation.y += delta * 0.02
      amberRef.current.rotation.x = -t * 0.008
    }
  })

  return (
    <>
      {/* Soft warm golden halos */}
      <points ref={amberRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.11}
          color={WARM_YELLOW}
          transparent
          opacity={0.4}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Champagne white star cores */}
      <points ref={whiteRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.042}
          color={CHAMPAGNE_WHITE}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </>
  )
}

function CameraRig({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const { camera, pointer } = useThree()

  useFrame(() => {
    const p = scrollRef.current
    const targetX = pointer.x * 0.75
    const targetY = pointer.y * 0.45 - p * 0.9
    const targetZ = 6.4 + p * 1.4
    camera.position.x += (targetX - camera.position.x) * 0.04
    camera.position.y += (targetY - camera.position.y) * 0.04
    camera.position.z += (targetZ - camera.position.z) * 0.04
    camera.lookAt(0, -p * 0.35, 0)
  })

  return null
}

function ScrollTracker({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  useFrame(() => {
    if (typeof window === 'undefined') return
    const max = window.innerHeight * 2.0
    scrollRef.current = Math.min(1, Math.max(0, window.scrollY / max))
  })
  return null
}

export default function CosmicScene({
  dpr = [1, 1.5] as [number, number],
}: {
  dpr?: [number, number]
}) {
  const scrollRef = useRef(0)

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
      onPointerMissed={() => {}}
    >
      <ScrollTracker scrollRef={scrollRef} />

      {/* Radiant Metallic Gold Studio Lighting */}
      <ambientLight color={PURE_GOLD} intensity={0.8} />
      <pointLight
        position={[5, 4.5, 4.5]}
        intensity={75}
        color={GOLD_BRIGHT}
        distance={25}
      />
      <pointLight
        position={[-5, -3, 3]}
        intensity={55}
        color={WARM_YELLOW}
        distance={22}
      />
      <pointLight
        position={[0, -6, -4]}
        intensity={35}
        color={PURE_GOLD}
        distance={20}
      />

      <GoldenBokehSquares scrollRef={scrollRef} />
      <StarConstellation scrollRef={scrollRef} />
      <CameraRig scrollRef={scrollRef} />
    </Canvas>
  )
}

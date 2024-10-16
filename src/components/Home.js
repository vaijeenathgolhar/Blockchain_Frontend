import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Home = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = (nodeId) => {
    setSelectedNode(nodeId);
  };

  // Define colors for the connection lines
  const connectionColors = [
    'lightgray', // Color for the first connection
    'orange',    // Color for the second connection
    'cyan',      // Color for the third connection
    'magenta',   // Color for the fourth connection
    'lime',      // Color for the fifth connection
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Section: Left and Right Divs */}
      <div className="flex flex-1 p-10 space-x-10">
        {/* Left Div - Description with Neumorphism */}
        <div className="w-1/2 p-8 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Skill Verification System</h1>
            <p className="text-lg mb-4">
              The skill verification system uses blockchain technology to ensure the authenticity of certificates and portfolios. 
              When a user submits their credentials, they are distributed to all nodes in the blockchain. Each node/person evaluates 
              the authenticity, and if more than 51% of nodes verify the credentials, the user is approved. Otherwise, the user is not verified. 
              This decentralized approach ensures transparency, security, and trust in the verification process, preventing fraud and providing 
              verifiable proof of skills.
            </p>
          </div>
        </div>

        {/* Right Div - 3D Blockchain Network with Neumorphism */}
        <div className="w-1/2 min-h-full p-6 bg-gray-200 rounded-3xl shadow-lg">
          <Canvas camera={{ position: [0, 5, 15], fov: 45 }}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            {/* Blockchain Nodes */}
            {[1, 2, 3, 4, 5].map((id, index) => (
              <Node key={id} position={[index * 3 - 6, 1, 0]} onClick={() => handleNodeClick(id)} />
            ))}

            {/* Connections between nodes */}
            {[1, 2, 3, 4, 5].map((node, index, arr) =>
              arr.slice(index + 1).map((targetNode, targetIndex) => (
                <ConnectionCylinder
                  key={`${node}-${targetNode}`}
                  start={[index * 3 - 6, 1, 0]}
                  end={[(arr[targetNode - 1] - 1) * 3 - 6, 1, 0]}
                  color={connectionColors[targetIndex % connectionColors.length]} // Cycle through colors
                />
              ))
            )}
          </Canvas>
        </div>
      </div>

      {/* Bottom Div - Additional Information (Spanning Full Width) */}
      <div className="w-full p-10 bg-gray-200 rounded-3xl shadow-lg mt-10 min-h-[300px]">
        <h2 className="text-2xl font-bold mb-4">Why Use Blockchain for Verification?</h2>
        <p className="text-lg">
          Blockchain technology provides a secure, decentralized, and immutable system for verifying user credentials. 
          Each transaction is stored across multiple nodes, making it nearly impossible to alter or falsify data. The consensus mechanism 
          ensures that the majority of participants agree on the authenticity of the credentials before verification is granted. 
          This not only prevents fraudulent claims but also increases trust in the verification system, as it operates without any central authority.
        </p>
        <p className="text-lg mt-4">
          Applications of blockchain verification extend beyond job placements. It is being used in education, healthcare, finance, and 
          many other sectors where proof of skills or qualifications is essential. With the rise of remote learning and online certifications, 
          blockchain provides a reliable method to verify and showcase skills globally.
        </p>
      </div>
    </div>
  );
};

// Blockchain Node Component with Neumorphism
const Node = ({ position, onClick }) => {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01; // Rotate the node for a dynamic effect
  });

  return (
    <mesh position={position} ref={meshRef} onClick={onClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="dodgerblue" />
    </mesh>
  );
};

// Connection Cylinder Component
const ConnectionCylinder = ({ start, end, color }) => {
  const length = new THREE.Vector3(...end).distanceTo(new THREE.Vector3(...start));
  const midPoint = new THREE.Vector3(...start).lerp(new THREE.Vector3(...end), 0.5);
  const direction = new THREE.Vector3(...end).sub(new THREE.Vector3(...start)).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  return (
    <mesh position={midPoint} rotation={quaternion}>
      <cylinderGeometry args={[0.05, 0.05, length, 32]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
  );
};

export default Home;
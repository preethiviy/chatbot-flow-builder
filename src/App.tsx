import ReactFlow, {
	addEdge,
	Controls,
	Background,
	Connection,
	Edge,
	Node,
	useEdgesState,
	useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import MessageNode from "./components/nodes/MessageNode";
import CustomEdge from "./components/CustomEdge";
import { useCallback } from "react";

const initialEdges: Edge[] = [];

const initialNodes: Node[] = [
	{
		id: "1",
		position: { x: 100, y: 100 },
		data: { text: "hello world" },
		type: "messageNode",
	},
	{
		id: "2",
		position: { x: 300, y: 300 },
		data: { text: "hello world 2" },
		type: "messageNode",
	},
];

const nodeTypes = {
	messageNode: MessageNode,
};

const edgeTypes = {
	customEdge: CustomEdge,
};

function App() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	const onConnect = useCallback(
		(connection: Connection) => {
			const edge = {
				...connection,
				animated: true,
				id: `${edges.length} + 1`,
				type: "customEdge",
			};
			setEdges((prevEdges) => addEdge(edge, prevEdges));
		},
		[edges]
	);

	return (
		<div>
			<div
				style={{ width: 800, height: 800 }}
				className="h-full w-full max-w-[800px] max-h-[800px] border-2"
			>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
					edgeTypes={edgeTypes}
					fitView
				>
					<Background />
					<Controls />
				</ReactFlow>
			</div>
		</div>
	);
}

export default App;

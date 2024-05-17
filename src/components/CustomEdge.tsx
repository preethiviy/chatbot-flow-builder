import { MdClear } from "react-icons/md";
import {
	BezierEdge,
	EdgeLabelRenderer,
	EdgeProps,
	getBezierPath,
	useReactFlow,
} from "reactflow";

export default function CustomEdge(props: EdgeProps) {
	const {
		id,
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition,
	} = props;

	const { setEdges } = useReactFlow();

	const [edgePath, labelX, labelY] = getBezierPath({
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourcePosition,
		targetPosition,
	});

	return (
		<>
			<BezierEdge {...props} />
			<EdgeLabelRenderer>
				<button
					onClick={() =>
						setEdges((prevEdges) =>
							prevEdges.filter((edge) => edge.id !== id)
						)
					}
					style={{
						position: "absolute",
						transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
						background: "transparent",
						padding: 10,
						borderRadius: 5,
						fontSize: 16,
						fontWeight: 700,
						pointerEvents: "all",
					}}
				>
					<MdClear className="text-red-500" />
				</button>
			</EdgeLabelRenderer>
		</>
	);
}

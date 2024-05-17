import { Handle, HandleProps } from "reactflow";

export default function CustomHandle(props: HandleProps) {
	return (
		<Handle
			style={{
				width: 10,
				height: 10,
				background: "black",
				border: "2px solid white",
			}}
			{...props}
		/>
	);
}

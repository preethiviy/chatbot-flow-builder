import { NodeProps, Position } from "reactflow";
import CustomHandle from "../CustomHandle";
import { BiMessageRoundedDetail } from "react-icons/bi";
import WhatsappLogo from "/whatsapp.png";

export default function MessageNode({
	data: { text },
}: NodeProps<{
	text: string;
}>) {
	return (
		<div className="border border-slate-300 rounded-md w-[300px]">
			<div className="flex items-center justify-between bg-[#a7e6d4] px-3 py-1.5">
				<div className="flex items-center gap-x-2">
					<BiMessageRoundedDetail />
					<p className="font-medium">Send Message</p>
				</div>
				<div className="bg-white p-1 rounded-full">
					<img src={WhatsappLogo} className="w-[15px] object-cover" />
				</div>
			</div>
			<div className="p-3">
				<p className="text-sm">{text}</p>
			</div>
			<CustomHandle type="source" position={Position.Right} />
			<CustomHandle type="target" position={Position.Left} />
		</div>
	);
}

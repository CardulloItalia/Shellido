import service from "@/data/serviceLido.json";

export default function ServiceLido() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-[24px] text-2xl text-[#2A6F97]">I nostri servizi</h1>
            <div className="p-10 flex flex-wrap w-full overflow-x-auto gap-15 items-start">
                {service.map((service) => (
                    <tr className="flex flex-col items-start mb-10" key={service.id}>
                        <td className=" text-[#2A6F97] w-50 h-20 text-[20px] font-italic items-start">
                            {service.title}
                            <p className=" font-normal text-black text-[16px]">{service.description}</p>
                        </td>
                    </tr>
                ))}
            </div>
        </div>
    )
}
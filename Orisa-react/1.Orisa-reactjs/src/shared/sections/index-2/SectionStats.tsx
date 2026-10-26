import OdometerCounter from "@/shared/elements/OdometerCounter";

const STATS = [
    { count: 21, suffix: "", label: "Countries" },
    { count: 100, suffix: "+", label: "Clients" },
    { count: 1500, suffix: "+", label: "Buyer Meetings" },
    { count: 30000, suffix: "+", label: "Minutes of Meetings" },
];

export default function SectionStats() {
    return (
        <div className="container-2200">
            <section className="at-sec8-area pt-90 pb-90 rounded-5 mx-lg-3 mx-2 mt-10">
                <style>{`
                    .at-sec8-area .odometer,
                    .at-sec8-area .odometer * {
                        letter-spacing: 0px !important;
                    }
                `}</style>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-lg-between justify-content-around align-items-center gap-4 text-center">
                                {STATS.map((stat) => (
                                    <div key={stat.label} className="text-center px-2">
                                        <h1 className="mb-2" style={{ letterSpacing: "0px" }}>
                                            <OdometerCounter
                                                count={stat.count}
                                                suffix={stat.suffix}
                                                className="text-nowrap"
                                                renderValue={(val) => val.toLocaleString()}
                                            />
                                        </h1>
                                        <p className="mb-0">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

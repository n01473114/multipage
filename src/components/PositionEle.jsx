function PositionEle(position) {
    if (position.fromYear == position.toYear) {
        return (
            <>
                <section>
                    <h1>{position.name}
                        <small> ({position.fromYear})</small>
                    </h1>
                    <h2 style={{ color: "#bba14f" }}>{position.org}</h2>
                    <p>{position.duties}</p>
                </section>
            </>
        );
    } else {
        return (
            <>
                <section>
                    <h1>{position.name}
                        <small> ({position.fromYear}-{position.toYear})</small>
                    </h1>
                    <h2 style={{ color: "#bba14f" }}>{position.org}</h2>
                    <p>{position.duties}</p>
                </section>
            </>
        );
    }
};

export default PositionEle;
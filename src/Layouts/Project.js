import React from "react";
import ProjectList from "../components/ProjectList";

function Project() {

    return (
        <section className="section-project">
            <div className="row">
            <h1 className="heading-primary">Projects</h1>
            <ProjectList />
            </div>
        </section>
    )
}

export default Project;
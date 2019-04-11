import React, { Component } from "react";
import ProjectComponent from "../components/Project/Project";
import { connect } from "react-redux";
import { fetchProjects } from "../actions/projectAction";
import { State } from "../types/State";
import { Project } from "../types/Project";

interface IProjectPageProps {
  fetchProjects: Function;
  projects: Project[];
}

const mapStateToProps = (state: State) => {
  return {
    projects: state.projectReducer.projects
  };
};

class ProjectsPage extends Component<IProjectPageProps, any> {
  constructor(props: IProjectPageProps) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return (
      <div className="propjects-page">
        {this.props.projects.length > 0
          ? this.props.projects.map(project => (
              <ProjectComponent
                key={project.projectId}
                id={project.projectId}
                name={project.projectName}
                tasks={project.tasks}
              />
            ))
          : ""}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { fetchProjects }
)(ProjectsPage);

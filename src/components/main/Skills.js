import React from 'react';
import Tag from '../widgets/Tag';
import List from '../widgets/List';

class Skills extends React.Component {
    render() {
        return (
            <div>
                <h2>Skills</h2>
                <div className='mx-8 grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-screen-lg lg:m-auto'>
                    <List
                        title='Technologies'
                        items={[
                            <p>Java &nbsp;<Tag level={4} /></p>,
                            <p>Spring Framework &nbsp;<Tag level={4} /></p>,
                            <p>React &nbsp;<Tag level={3} /></p>,
                            <p>Java Persistence API &nbsp;<Tag level={3} /></p>,
                            <p>Git &nbsp;<Tag level={3} /></p>,
                            <p>SQL &nbsp;<Tag level={2} /></p>,
                            <p>Thymeleaf &nbsp;<Tag level={2} /></p>,
                            <p>Apache Maven &nbsp;<Tag level={2} /></p>,
                            <p>Oracle Weblogic 12c &nbsp;<Tag level={2} /></p>,
                            <p>WildFly &nbsp;<Tag level={2} /></p>,
                            <p>Tomcan 9 &nbsp;<Tag level={2} /></p>,
                            <p>Docker &nbsp;<Tag level={2} /></p>,
                            <p>Swagger API &nbsp;<Tag level={2} /></p>,
                        ]} />
                    <List
                        title='Tools'
                        items={[
                            <p>Jira &nbsp;<Tag level={4} /></p>,
                            <p>Confluence &nbsp;<Tag level={4} /></p>,
                            <p>GitLab &nbsp;<Tag level={3} /></p>,
                            <p>IntelliJ IDEA &nbsp;<Tag level={3} /></p>,
                            <p>Sonarqube &nbsp;<Tag level={2} /></p>,
                            <p>GitHub &nbsp;<Tag level={2} /></p>,
                            <p>SoapUI &nbsp;<Tag level={2} /></p>,
                            <p>JMeter &nbsp;<Tag level={1} /></p>,
                        ]} />
                </div>
            </div>
        )
    }
}

export default Skills;
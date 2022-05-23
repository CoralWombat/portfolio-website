import React from 'react';

class ProjectsCard extends React.Component {
    render() {
        return (
            <div className='bg-custom-light rounded-3xl custom-shadow dark:bg-custom-dark'>

                <div className='bg-custom-color rounded-t-3xl w-full py-8 text-center lg:rounded-t-xl'>
                    <h4>{this.props.lifeSpan}</h4>
                    <h3>{this.props.title}</h3>
                    <h5>as {this.props.role}</h5>
                    <h3 className='flex justify-center'>{this.props.icon}</h3>
                </div>

                <div className='m-12'>
                    <p>
                        {this.props.text}
                    </p>
                    <br />
                    <p className='font-medium'>Used technologies:</p>
                    {this.getTechList(this.props.tehcnologies)}
                </div>

            </div>
        );
    }

    getTechList(tehcnologies) {
        const listItems = tehcnologies.map(element => {
            return (<li>{element}</li>);
        });
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default ProjectsCard;

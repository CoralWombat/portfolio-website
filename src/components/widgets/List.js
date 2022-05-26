import React from "react";

class List extends React.Component {
    render() {
        return (
            <div className="p-12 custom-border custom-rounded">
                {
                    (this.props.title != null) ? <h3>{this.props.title}</h3> : ''
                }
                <div className="flex flex-col justify-center align-middle">
                    {
                        (this.props.items != null) ? this.getItemsList(this.props.items) : ''
                    }
                </div>
            </div>
        );
    }

    getItemsList(items) {
        return items.map(element => {
            return (
                <div >
                    <div className="horizontal-line -mx-12 my-4" />
                    <div>{element}</div>
                </div>
            );
        });
    }
}

export default List;
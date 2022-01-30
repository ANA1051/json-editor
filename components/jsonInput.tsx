import React from "react";

interface JsonInputProps{
    handleClick: Function
}

interface JsonInputState {
	value: string,
    isJson: boolean
}

class jsonInput extends React.Component <JsonInputProps, JsonInputState>{
    constructor(props:any){
        super(props);
        this.state = {
            value: "",
            isJson: false
        }
    }

    private handleChange(event: React.ChangeEvent){
        this.setState({value: event.target.value});
        const val = event.target.value;
        try{
            JSON.parse(val);
        }
        catch(err){
            this.setState({isJson: false});
            return
        }
        if (Array.isArray(JSON.parse(val))){
            this.setState({isJson: true});
			return;
        }
    }

    render(): React.ReactNode {
        return (
            <div>
                <button onClick={()=>this.props.handleClick(this.state.value)}>Submit</button>
                <input placeholder="Please Input Valid JSON text." onChange={()=>this.handleChange(event)}/>
                <p>{this.state.isJson ? "Valid JSON array": "Invalid JSON array"}</p>
            </div>
        );
    }
}

export default jsonInput;
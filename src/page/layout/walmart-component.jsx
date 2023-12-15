import React, { useState } from "react";
import Header from "../../navigation/header/header.component";
import FormInput from "../../components/form-input/form-input.component";
import Select from 'react-select';
import CustomButton from "../../components/custom-button/custom-button";
import wallmartBackground from '../../assets/Images/walmart.jpg';
import './walmart.styles.css';



const Walmart = () => {
    const options = [
        { value: "option1", label: "Giftcard" },
        { value: "option2", label: "Steamcard" },
        { value: "option3", label: "Vanilacard"},
    ];
    const [selectedOptions, setSelectedOptions] = useState(null);
    const handleSelectChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
    }
    const customStyles = {
        control: (provided) => ({
            justifyContent: 'center',
            border: '1px solid #000',
            marginLeft: '32rem',
            width:'250px',
            borderRadius: '10px',
        }),
    };

    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${wallmartBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"100vh",
        padding: '30px',
    };
    return (
        <>
        <Header />
        <div style={styles}>
        <div>
            <h2 className="text-center text-dark-900">
                Process Your Order Now...
                </h2>
             <form>
            <FormInput
            style = {{ 
                width: "20%",
            }}
            name="text"
            type="text"
            placeholder=" FullName"
            />
            <FormInput
            style = {{ 
                width: "20%",
           }}
            name="text"
            type="text"
            placeholder="Your goods"
            />
            <FormInput
            style = {{ 
                width: "20%",
            }}
            name="text"
            type="Number"
            placeholder="Amount"
            />
            <Select
            options={options}
            value={selectedOptions}
            onChange={handleSelectChange}
            styles={customStyles}
            />
            <FormInput
            style = {{ 
                width: "20%",
            }}
            name="text"
            type="text"
            placeholder="Product"
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
           <CustomButton>Submit</CustomButton>
           </div>
        </form>
        </div>
        </div>
        </>
    );
}

export default Walmart;
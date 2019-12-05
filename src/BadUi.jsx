import React, { useState } from "react";

export const PhoneForm = props => {
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [showAdvanced, setShowAdvanced] = useState(false);

    return (
        <>
            <form>
                <label>Please enter your phone number</label>
                <div class="phonenumber">
                    {phoneNumber.toString().padStart(11, "0")}
                </div>
                <div className="inputs">
                    <input
                        type="button"
                        class="input"
                        onClick={() => {
                            setPhoneNumber(prev => prev * 3);
                        }}
                        value="x 3"
                    />
                    <input
                        type="button"
                        class="input"
                        onClick={() => {
                            setPhoneNumber(prev => prev + 7);
                        }}
                        value="+ 7"
                    />

                    <input
                        type="button"
                        class="input"
                        onClick={() => {
                            setPhoneNumber(prev => prev / 5);
                        }}
                        value="/ 5"
                    />
                    <input
                        type="button"
                        class="input"
                        onClick={() => {
                            setPhoneNumber(prev => prev - 2);
                        }}
                        value="- 2"
                    />
                </div>
                {showAdvanced ? (
                    <div key="a" className="inputs">
                        <input
                            type="button"
                            class="input advanced-input"
                            onClick={() => {
                                setPhoneNumber(prev => Math.round(prev));
                            }}
                            value="floor"
                        />
                        <input
                            type="button"
                            class="input advanced-input"
                            onClick={() => {
                                setPhoneNumber(prev => Math.cbrt(prev));
                            }}
                            value="³√"
                        />
                        <input
                            type="button"
                            class="input advanced-input"
                            onClick={() => {
                                setPhoneNumber(prev => prev * prev);
                            }}
                            value="🗴²"
                        />
                        <input
                            type="button"
                            class="input advanced-input"
                            onClick={() => {
                                setPhoneNumber(prev => Math.log10(prev));
                            }}
                            value="log 10"
                        />
                    </div>
                ) : (
                    <></>
                )}
                <input
                    type="submit"
                    onClick={() => {
                        setPhoneNumber(prev => prev / 5);
                    }}
                    class="submit"
                    value="Submit"
                />
                {!showAdvanced ? (
                    <div className="inputs" key="a">
                        <input
                            class="advanced"
                            type="button"
                            onClick={p => setShowAdvanced(true)}
                            value="Advanced mode"
                        ></input>
                    </div>
                ) : (
                    <></>
                )}
            </form>
            <a
                className="socials"
                href="https://github.com/Box-Of-Hats/bad-ui-phone-number"
            >
                View the source
            </a>
        </>
    );
};

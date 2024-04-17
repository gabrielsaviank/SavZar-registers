import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

import { BaseInput } from "../../../components/BaseInput/BaseInput";
import { AddressCard } from "../../../components/AddressForm/AddressCard";
import { BaseButton } from "../../../components/BaseButton/BaseButton";
import { fetchPersonById, updatePerson } from "../../../ducks/actions/PersonsActions";
import { createAddress, deleteAddress, updateAddress } from "../../../ducks/actions/AddressesActions";
import { AddressType } from "../../../helpers/types";

const EditPerson = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { persons } = useSelector((state: any) => state?.persons);
    const dispatch = useDispatch();
    const [showAddAddressCard, setShowAddAddressCard] = useState(false);
    const [isModified, setIsModified] = useState(false);
    const [newAddress, setNewAddress] = useState({
        postCode: "",
        neighbourhood: "",
        number: "",
        complement: "",
        street: "",
        city: "",
        state: ""
    });

    const [personData, setPersonData] = useState({
        name: "",
        sex: "",
        birthDate: "",
        maritalStatus: "",
        addresses: [] as AddressType[] | [],
    });

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(fetchPersonById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (persons) {
            setPersonData({
                name: persons.name,
                sex: persons.sex,
                birthDate: persons.birthdate,
                maritalStatus: persons.maritalStatus,
                addresses: persons.addresses,
            });
        }
    }, [persons]);

    const handleSubmit = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(updatePerson(personData, id));
        navigate("/main");
    };

    const handleChange = (field: string, value: string) => {
        setPersonData((prevData: any) => ({
            ...prevData,
            [field]: value,
        }));
        setIsModified(true);
    };

    const handleSubmitAddress = (address: AddressType, id: string | undefined) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(updateAddress(address, id));
        toast.success("🎉 Address Updated");
    };

    const handleAddressChange = (updatedAddress: AddressType, index: string | undefined | any) => {
        const updatedAddresses = [...personData.addresses];
        updatedAddresses[index] = updatedAddress;
        setPersonData((prevData) => ({
            ...prevData,
            addresses: updatedAddresses,
        }));
        setIsModified(true);
    };

    const handleDeleteAddress = (index: string | undefined) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(deleteAddress(index));
        toast.warning("🎉 Address Deleted");
    };


    const handleAddAddressChange = (field: string, value: string | number | any) => {
        setNewAddress(prevAddress => ({
            ...prevAddress,
            [field]: value
        }));
    };

    const handleCreateAddress = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(createAddress(newAddress, persons.id));
        toast.success("🎉 Address Created");
    };

    return (
        <Container style={{ paddingTop: 30, paddingBottom: 30 }}>
            <ToastContainer />
            <Typography variant="h4">Update Person</Typography>
            <form onSubmit={handleSubmit}>
                <BaseInput
                    label="Name"
                    type="text"
                    value={personData.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                />
                <BaseInput
                    label="Sex"
                    type="text"
                    value={personData.sex}
                    onChange={(event) => handleChange("sex", event.target.value)}
                />
                <BaseInput
                    type="date"
                    value={personData.birthDate}
                    onChange={(event) => handleChange("birthDate", event.target.value)}
                />
                <BaseInput
                    label="Marital Status"
                    type="text"
                    value={personData.maritalStatus}
                    onChange={(event) => handleChange("maritalStatus", event.target.value)}
                />
                <Typography variant="h6">Addresses</Typography>

                {personData?.addresses?.length > 0 ? (
                    personData.addresses.map((address, index) => (
                        <AddressCard
                            address={address}
                            key={index}
                            action="edit"
                            onChange={(field, value) => {
                                const updatedAddress = { ...address, [field]: value };
                                handleAddressChange(updatedAddress, index);
                            }}
                            onUpdate={() => handleSubmitAddress(personData.addresses[index], personData.addresses[index].id)}
                            onDeleteAddress={() => handleDeleteAddress(personData.addresses[index].id)}
                        />
                    ))
                ) : (
                    (showAddAddressCard && (
                        <AddressCard
                            address={{}}
                            key={0}
                            action="create"
                            onCreateAddress={() => handleCreateAddress()}
                            onChange={(field, value) => handleAddAddressChange(field, value)}
                            onDelete={() => setShowAddAddressCard(!showAddAddressCard)}
                        />
                    ))
                )}
                {personData?.addresses?.length === 0 && (
                    <BaseButton
                        variant="contained"
                        color="primary"
                        onClick={() => setShowAddAddressCard(!showAddAddressCard)}
                        style={{ marginTop: 20 }}
                    >
                        Add Address
                    </BaseButton>
                )}
                <div style={{ paddingTop: 40 }}>
                    <BaseButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => handleSubmit}
                        disabled={!isModified}
                        style={{ marginTop: "30px" }}
                    >
                        Submit
                    </BaseButton>
                </div>
            </form>
        </Container>
    );
};

export default EditPerson;

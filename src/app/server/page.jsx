"use client";
import { formServer } from "@/lib/Form/Form";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const ServerPage = () => {

    return (
        <div>
            <form className="flex w-96 flex-col gap-4" action={formServer}>


                <TextField
                    isRequired
                    name="name"
                    type="text"

                >
                    <Label>Name</Label>
                    <Input placeholder="Enter Your Name" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    name="role"
                    type="text"

                >
                    <Label>Role</Label>
                    <Input placeholder="Your Role" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    
                    name="roll"
                    type="text"

                >
                    <Label>Roll Number</Label>
                    <Input placeholder="Enter your roll" />
                    <Description>Must be at least 4 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ServerPage;
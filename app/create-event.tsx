import {View, Text, TextInput, Button} from "react-native";
import { useForm, Controller } from "react-hook-form"
import DateTimePicker from "react-native-ui-datepicker/src/DateTimePicker";


const CreateEvent = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            eventName: "",
            eventDate: "",

        },
    })
    const onSubmit = (data) => console.log(data);

    return (
        <View>
            <Text>Create a new event!</Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Event name:"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="eventName"
            />
            {errors.eventName && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <DateTimePicker
                        mode="single"
                        date={value}
                        onChange={onChange}
                    />
                )}
                name="eventDate"
            />
            {errors.eventDate && <Text>This is required.</Text>}

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

export default CreateEvent;
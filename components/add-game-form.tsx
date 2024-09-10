import {View, Text, TextInput, Button} from "react-native";
import { useForm, Controller } from "react-hook-form"


const AddGameForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            gameName: "",
            gameDesc: "",
            pictures: [],
            numOfTimers: 1,
            numOfPlayers: 0,
            secondaryGames: []
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
                        placeholder="Game name:"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="gameName"
            />
            {errors.gameName && <Text>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Game description:"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="gameDesc"
            />
            {errors.gameDesc && <Text>This is required.</Text>}

            <Text>Pictures:</Text>


        </View>
    )
}

export default AddGameForm;
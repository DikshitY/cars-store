import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName} from './slice/formSlice'
import { carsReducer, changeSearchTerm, addCar, removeCar} from './slice/carsSlice'

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export {store, changeCost, changeName, changeSearchTerm, addCar, removeCar}
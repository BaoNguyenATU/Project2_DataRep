import { useEffect } from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MealItem = (props) => {
    useEffect(() => {
        console.log("Meals:", props.meals);
    });
}

export default MealItem;
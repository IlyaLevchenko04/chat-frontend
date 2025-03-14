import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@shared/types/redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActionCreators from '../store/action-creators/products';
import * as cartActionCreators from '../store/action-creators/carts'
import * as authActionCreators from '../store/action-creators/auth'
import * as rewiewsActionCreators from '../store/action-creators/rewiews'
import * as fovaritesActionCreators from '../store/action-creators/fovarites'

export const useProductActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(productActionCreators, dispatch)
}
export const useCartActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(cartActionCreators, dispatch)
}
export const useAuthActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(authActionCreators, dispatch)
}
export const useRewiewsActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(rewiewsActionCreators, dispatch)
}
export const useFovaritesActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(fovaritesActionCreators, dispatch)
}

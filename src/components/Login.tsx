import { useEffect, useReducer } from "react";

export const Login = () => {
    //Interface estado de autenticación
    interface AuthState {
        validando: boolean;
        token: string | null;
        username: string;
        password: string;
    }

    //Creando estado inicial - segundo parámetro
    const inicialState: AuthState = {
        validando: true,
        token: null,
        username: '',
        password: ''
    }

    //Type para los parámetros de las acciones
    type LoginPayLoad = {
        username: string;
        password: string;
    }

    //Las posibles acciones que se pueden realizar
    type AuthAction =
        { type: 'logout' }
        | { type: 'login', payload: LoginPayLoad }
        
    //Función reducer - primer parámetro
    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false,
                    token: null,
                    username: '',
                    password: ''
                }
            case 'login':
                //desestructuración de objetos
                const { username, password } = action.payload;
                return {
                    validando: false,
                    token: 'ERTy56_gtYghEDR45_yutuyt6787',
                    username: username,
                    password: password
                }

            default:
                return state;

        }
    }


    //hook useReducer: permite el cambio de estados más complejos
    const [state, dispatch] = useReducer(authReducer, inicialState);

    //hook useEffect: permite ejecutar efectos secundarios en componentes funcionales
    useEffect(() => {
        //Función de tiempo
        setTimeout(() => {
            //Disparando la acción
            dispatch({ type: 'logout' })
        }, 1500); //milisegundo
    }, []);

    //Función para disparar la acción login
    const login = (): void => {
        dispatch({
            type: 'login',
            payload: {
                username: 'vflores',
                password: 'vflores123*'
            }
        })
    }

    //Función para disparar la acción logout
    const logout = (): void => {
        dispatch({ type: 'logout' })
    }


    //Implementar una validación para mostrar los mensajes de acuerdo a la acción
    if (state.validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <div>
            <h3>Login</h3>
            {(state.token == null)
                ? <div className="alert alert-danger">No autenticado...</div>
                : <div className="alert alert-success">Autenticado...</div>
            }
            {(state.token == null)
                ? <button
                    className="btn btn-primary"
                    onClick={login}>Login
                </button>
                : <button className="btn btn-danger"
                    onClick={logout}>Logout
                </button>
            }
        </div>
    )
}

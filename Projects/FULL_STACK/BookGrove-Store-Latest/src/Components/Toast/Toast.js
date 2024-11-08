import { useCallback, useEffect, useState } from 'react'
import './Toast.css'
import { useToast } from "../../Context/toast-context"

function Toast({ position }) {
    const { toastList, setToastList } = useToast()
    const [flyToCart, setFlyToCart] = useState(null)

    const deleteToast = useCallback(toastId => {
        const newToastListItem = toastList.filter(toast => toast.id !== toastId)
        setToastList(prevToastList => newToastListItem)
    }, [toastList, setToastList])

    useEffect(() => {
        const interval = setInterval(() => {
            if (toastList.length) {
                deleteToast(toastList[0].id)
            }
        }, 3000);

        return () => {
            clearInterval(interval)
        }
    }, [toastList, deleteToast])

    const handleFlyToCart = (toastId) => {
        setFlyToCart(toastId)
        setTimeout(() => deleteToast(toastId), 1000) // Delay to allow animation to complete
    }

    return (
        <div className={`toasts-container ${position}`}>
            {
                toastList.map((toast) => (
                    <div key={toast.id}
                         className={`notification ${toast.type} ${flyToCart === toast.id ? 'fly-to-cart' : ''}`}
                    >
                        <div className="toast-content-container">
                            <h3 className='toast-title'>{toast.title}</h3>
                            <p className='toast-description'>{toast.description}</p>
                        </div>
                        <button onClick={() => handleFlyToCart(toast.id)} className="toast-close-btn">×</button>
                    </div>
                ))
            }
        </div>
    )
}

export { Toast }

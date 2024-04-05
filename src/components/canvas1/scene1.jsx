// Props представляет коллекцию значений, которые ассоциированы с компонентом
import { useEffect, useRef } from "react";

const Scene1 = (props) => {
    //Это ссылка на что?
    const ref = useRef(null);
    
    const draw = (ctx, count) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = 'grey';
        ctx.fillRect(100, 0, Math.sin(count / 10) * 100, 100);
    }


    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');

        let count = 0;
        let animationID;
        const renderer = () => {
            count++;
            draw(ctx, count);
            animationID = window.requestAnimationFrame(renderer);
        }

        renderer();
        return () => window.cancelAnimationFrame(animationID);
    },[])
    return <canvas ref = {ref} {...props}/>
}
export default Scene1;
// importing client-only package
import "client-only"

export const clientSideFunction = () => {
    console.log(`
        use window object,
        use localStorage
        `);
    return "client result";
}
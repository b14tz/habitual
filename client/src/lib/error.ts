export function handleError(err: any) {
    let message;
    if (err instanceof Error) message = err.message;
    else message = String(err);
    console.error(message);
    alert(message);
}

let browser = prompt("Enter your browser name:");
switch (browser) {
    case "Edge":
        alert(` you've got the browser`);
        break;
    case `Chrome`:
    case `Firefox`:
    case `Opera`:
    case `Safari`:
        alert(`ok we support these browsers too`)
        break;

        default:
            alert(`we hope that this page looks ok !`)
}
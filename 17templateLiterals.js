let name = "Goran";

console.log(`Hi ${name}`);

function getReasonCount() {
    return 1;
}

let interpolation = `Give me ${(getReasonCount() === 1) ? 'one good reason' : 'a few reasons'} to try this.`
console.log(interpolation);
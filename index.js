const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//

//

// Finding out the toal amount before discounts
const subTotal= (price, amount) => {
    return price * amount;

}

// Calculating amount if subscription is true
const subDiscount = (num) => {
    let numToRemove = num * .25
    return num - numToRemove;

}

// Calculating amount if coupon is true
const couponDiscount = (num) => {
    return num - 10;

}

// Function to calculate the total cost
function runTheRefills (customer) {
    // Calculate the priceperrefill and multiply it by how many refills
    let totalCost = subTotal(customer.pricePerRefill, customer.refills)

    // Checks to see if subsriction is true
    if (customer.subscription === true) {
        // If subscription is true run function to reduce price
        totalCost = subDiscount(totalCost)

    } 

    // Checks to see if coupon is true
    if (customer.coupon === true) {
        // If coupon is true run function to reduce price
        totalCost = couponDiscount(totalCost)

    }

    // Logs total
    console.log(`Your grand total is $${totalCost}`)

}



runTheRefills(sarah)
runTheRefills(timmy)
runTheRefills(rocky)

# 🌍 1. Global Scope

### Definition

**A variable declared outside all functions and blocks is called a Global Scope variable. It can be accessed from anywhere in the program.**

**Hinglish:**
Jo variable **function aur block ke bahar** declare hota hai, use **Global Scope** kehte hain. Use program me **kahin se bhi access** kar sakte hain.

### Real-Life Example 🌍

Socho **India** ek country hai. Country ke rules sab states me follow hote hain.

Waise hi **Global Variable** program ke har part me use ho sakta hai.

### Code

```javascript
// 🌍 Global Scope
let country = "India";

function student() {
    console.log(country); // ✅ Access
}

student();

console.log(country); // ✅ Access
```

---

# 🏠 2. Function Scope

### Definition

**A variable declared inside a function is called a Function Scope variable. It can only be accessed within that function.**

**Hinglish:**
Jo variable **function ke andar** declare hota hai, use **Function Scope** kehte hain. Use **sirf us function ke andar** access kar sakte hain.

### Real-Life Example 🏠

Socho **Bedroom** sirf ghar ke members use kar sakte hain. Bahar ke log use nahi kar sakte.

Waise hi Function Scope sirf function ke andar available hota hai.

### Code

```javascript
function home() {

    // 🏠 Function Scope
    var room = "Bedroom";

    console.log(room); // ✅ Access
}

home();

// console.log(room); ❌ Error
```

---

# 📦 3. Block Scope

### Definition

**A variable declared inside a block (`{}`) using `let` or `const` is called a Block Scope variable. It can only be accessed within that block.**

**Hinglish:**
Jo variable **`{}` block ke andar `let` ya `const` se** declare hota hai, use **Block Scope** kehte hain. Use **sirf us block ke andar** access kar sakte hain.

### Real-Life Example 📦

Socho ek **Locker** hai. Jo cheez locker me hai, use sirf locker kholkar hi dekh sakte ho.

Waise hi Block Scope variable sirf `{}` ke andar hi milta hai.

### Code

```javascript
if (true) {

    // 📦 Block Scope
    let password = "1234";

    console.log(password); // ✅ Access
}

// console.log(password); ❌ Error
```

---

# 🎯 Easy Memory Trick

| Scope             | Definition                                      | Real-Life           |
| ----------------- | ----------------------------------------------- | ------------------- |
| 🌍 Global Scope   | Function aur block ke bahar declare hota hai    | **Country (India)** |
| 🏠 Function Scope | Function ke andar declare hota hai              | **House / Room**    |
| 📦 Block Scope    | `{}` ke andar `let`/`const` se declare hota hai | **Locker / Box**    |

### 5-Second Interview Answer

* 🌍 **Global Scope** → Accessible **everywhere**.
* 🏠 **Function Scope** → Accessible **only inside the function**.
* 📦 **Block Scope** → Accessible **only inside the block `{}`**.






# `var` in JavaScript

## Definition

**`var` is a keyword in JavaScript used to declare a variable. It is function-scoped, allows re-declaration and reassignment, and supports hoisting.**

### Hinglish

**`var` JavaScript ka ek keyword hai jiska use variable declare (banane) ke liye hota hai. `var` function scope follow karta hai, re-declaration aur reassignment allow karta hai, aur hoisting support karta hai.**

---

# Syntax

```javascript
var variableName = value;
```

### Example

```javascript
var name = "Sachin";

console.log(name);
```

**Output**

```text
Sachin
```

---

# Features of `var`

### 1. Used to Declare Variables

```javascript
var age = 20;
```

👉 `var` ka use variable banane ke liye hota hai.

---

### 2. Function Scope

```javascript
function demo() {

    var age = 20;

    console.log(age); // ✅
}

demo();

// console.log(age); ❌ Error
```

👉 `age` sirf `demo()` function ke andar use ho sakta hai.

---

### 3. Not Block Scope

```javascript
if (true) {

    var city = "Indore";
}

console.log(city); // ✅ Indore
```

👉 `var` block scope follow **nahi** karta.

---

### 4. Re-declaration Allowed

```javascript
var name = "Sachin";
var name = "Rahul";

console.log(name);
```

**Output**

```text
Rahul
```

👉 Same variable ko dubara declare kar sakte hain.

---

### 5. Reassignment Allowed

```javascript
var age = 20;

age = 21;

console.log(age);
```

**Output**

```text
21
```

👉 Variable ki value change kar sakte hain.

---

### 6. Hoisting

```javascript
console.log(a);

var a = 10;
```

**Output**

```text
undefined
```

👉 `var` ki declaration upar ho jati hai, lekin value baad me assign hoti hai.

---

# Real-Life Example

Socho `var` ek **ghar ka room** hai.

* Room (function) ke andar jo cheez rakhi hai, woh usi room ke andar use hogi.
* Lekin room ke andar agar koi cupboard (`{}` block) hai, to `var` us cupboard me band nahi hota; woh poore room me accessible rehta hai.



 

# `let` in JavaScript

## Definition

**`let` is a keyword in JavaScript used to declare variables. It is block-scoped, allows reassignment, but does not allow re-declaration in the same scope.**

### Hinglish

**`let` JavaScript ka ek keyword hai jiska use variable declare karne ke liye hota hai. Yeh block scope follow karta hai, value ko change (reassign) kar sakte hain, lekin same scope me dobara declare nahi kar sakte.**

---

## Syntax

```javascript
let age = 20;
```

---

## Features of `let`

### 1. Block Scope

```javascript
if (true) {
    let city = "Indore";
    console.log(city); // ✅
}

// console.log(city); ❌ Error
```

👉 Sirf `{}` ke andar use hoga.

---

### 2. Reassignment Allowed

```javascript
let age = 20;

age = 21;

console.log(age);
```

**Output**

```
21
```

---

### 3. Re-declaration Not Allowed

```javascript
let name = "Sachin";

// let name = "Rahul"; ❌ Error
```

---

# `const` in JavaScript

## Definition

**`const` is a keyword in JavaScript used to declare constant variables. It is block-scoped and does not allow reassignment or re-declaration.**

### Hinglish

**`const` JavaScript ka ek keyword hai jiska use constant (fixed) variable declare karne ke liye hota hai. Yeh block scope follow karta hai aur iski value change ya dobara declare nahi ki ja sakti.**

---

## Syntax

```javascript
const pi = 3.14;
```

---

## Features of `const`

### 1. Block Scope

```javascript
if (true) {
    const country = "India";
    console.log(country); // ✅
}

// console.log(country); ❌ Error
```

---

### 2. Reassignment Not Allowed

```javascript
const pi = 3.14;

// pi = 3.14159; ❌ Error
```

---

### 3. Re-declaration Not Allowed

```javascript
const name = "Sachin";

// const name = "Rahul"; ❌ Error
```

---

# Difference Between `var`, `let`, and `const`

| Feature    |        `var`        |    `let`    |   `const`   |
| ---------- | :-----------------: | :---------: | :---------: |
| Scope      |       Function      |    Block    |    Block    |
| Re-declare |        ✅ Yes        |     ❌ No    |     ❌ No    |
| Reassign   |        ✅ Yes        |    ✅ Yes    |     ❌ No    |
| Hoisting   | ✅ Yes (`undefined`) | ✅ Yes (TDZ) | ✅ Yes (TDZ) |

---

# Easy Memory Trick

```text
var
✔ Function Scope
✔ Re-declare
✔ Reassign

let
✔ Block Scope
❌ Re-declare
✔ Reassign

const
✔ Block Scope
❌ Re-declare
❌ Reassign
```


================== DATA_TYPE =================


# 📦 Data Type in JavaScript

## Definition

> **A data type tells us what kind of data a variable stores.**

### Hinglish

> **Data Type batata hai ki variable ke andar kis type ka data store hai.**

### Example

```javascript
let name = "Sachin";   // String
let age = 20;         // Number
let isStudent = true; // Boolean
```

Yahan:

* `name` → **String**
* `age` → **Number**
* `isStudent` → **Boolean**

---

# 🔥 JavaScript ke Data Types

JavaScript me mainly **2 categories** hoti hain:

```text
Data Types
│
├── Primitive
│
└── Non-Primitive (Reference)
```

## 1️⃣ Primitive Data Types

JavaScript me **7 primitive data types** hain:

### 1. String

Text/data ko store karta hai.

```javascript
let name = "Sachin";
```

👉 `"Sachin"` = String

---

### 2. Number

Numbers ko store karta hai.

```javascript
let age = 20;
let marks = 85.5;
```

👉 `20`, `85.5` = Number

---

### 3. Boolean

Sirf **true ya false** store karta hai.

```javascript
let isStudent = true;
let isPassed = false;
```

👉 `true` / `false` = Boolean

---

### 4. Undefined

Variable declare hua hai, lekin value nahi di.

```javascript
let x;

console.log(x);
```

Output:

```text
undefined
```

👉 Value nahi hai = `undefined`

---

### 5. Null

Jab hum **intentionally empty value** rakhna chahte hain.

```javascript
let data = null;
```

👉 `null` = intentionally no value

---

### 6. BigInt

Bahut bade integers ke liye.

```javascript
let bigNumber = 12345678901234567890n;
```

👉 `n` lagane se BigInt banta hai.

---

### 7. Symbol

Unique value create karne ke liye use hota hai.

```javascript
let id = Symbol("id");
```

👉 Har Symbol unique hota hai.

---

# 2️⃣ Non-Primitive / Reference Data Type

### Object

Multiple values ko ek structure me store kar sakte hain.

```javascript
let student = {
    name: "Sachin",
    age: 20
};
```

Array aur Function bhi JavaScript me objects/reference types ke roop me treat kiye jaate hain.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

function hello() {
    console.log("Hello");
}
```

---

# 🧠 Ekdum Easy Trick

```text
Primitive
│
├── String     → "Sachin"
├── Number     → 20
├── Boolean    → true
├── Undefined  → undefined
├── Null       → null
├── BigInt     → 123n
└── Symbol     → Symbol()

Non-Primitive
│
└── Object     → { name: "Sachin" }
```

### 🎯 Interview Definition

> **A data type defines the type of value that a variable can store. JavaScript has primitive data types such as String, Number, Boolean, Undefined, Null, BigInt, and Symbol, and reference types such as Objects.**



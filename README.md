**vue-mask-next** is a simple input mask library for Vue.js 3, designed to facilitate the creation of input masks for fields in your Vue.js 3 applications. This library is inspired by vue-3-mask but provides additional functionality such as prefilled value support, and it currently works with Vue version 3.4.26+, composition API, and script setup.

## Installation

Install the library via npm or yarn:

```bash
npm install vue-mask-next
```

or

```bash
yarn add vue-mask-next
```

## Usage

### Global Registration

In your Vue 3 application, open the `main.js` (or `main.ts`) file and import the `MaskInput` component from the `vue-mask-next` library. Register it globally:

```javascript
import { createApp } from "vue";
import App from "./App.vue";
import { MaskInput } from "vue-mask-next";

const app = createApp(App);

app.component("MaskInput", MaskInput);

app.mount("#app");
```

Now you can use the `MaskInput` component throughout your application.

### Local Registration

If you prefer to register the component locally, you can do so in the components section of your Vue component:

```javascript
import { MaskInput } from "vue-mask-next";

export default {
  components: {
    MaskInput,
  },
};
```

### Using MaskInput in Your Components

To use the `MaskInput` component in your Vue components, simply include it in your template and provide a `mask` prop with the desired pattern. Various mask patterns are supported:

- `#`: Any digit (0-9)
- `X`: Any alphanumeric character (0-9, a-z, A-Z)
- `S`: Any alphabetic character (a-z, A-Z)
- `A`: Any uppercase alphabetic character (A-Z)
- `a`: Any lowercase alphabetic character (a-z)
- `!`: Escape character (use the next character in the mask as a literal)

Here's an example of using the `MaskInput` component with a phone number mask:

```vue
<template>
  <div>
    <h1>Phone number input example</h1>
    <MaskInput v-model="phoneNumber" mask="(##) ####-####" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneNumber: "",
    };
  },
};
</script>
```

In this example, the `MaskInput` component will enforce the provided phone number mask as the user types, and the masked value will be stored in the `phoneNumber` data property.

### Usage of v-bind="$attrs"

The `$attrs` object allows you to pass additional attributes to the underlying input element. Here are some examples:

- Binding a placeholder:

```vue
<MaskInput
  v-model="phoneNumber"
  mask="(##) ####-####"
  placeholder="Enter phone number"
/>
```

- Binding a CSS class:

```vue
<MaskInput v-model="phoneNumber" mask="(##) ####-####" class="form-control" />
```

- Binding an event handler:

```vue
<MaskInput v-model="phoneNumber" mask="(##) ####-####" @focus="handleFocus" />
```

In each of these examples, the additional attribute is forwarded to the underlying input element using `v-bind="$attrs"`, allowing for flexible usage and customization.

## Implementation Details

The `MaskInput` component implementation utilizes the following:

- A template with a single `<input>` element, bound to the `value` data property using `v-model`.
- The `$attrs` object, which forwards any attributes passed to the component to the underlying input element using `v-bind="$attrs"`. This allows users to apply additional attributes directly to the input element.
- Script setup with props, including a required prop `mask` specifying the masking pattern.
- Mask definitions allowing different characters to be interpreted differently in the mask pattern.
- The `applyMask` function, which applies the masking logic to generate the masked value.
- The `handleInput` function, triggered on input events, applies the mask to the input value, updating the `value` data property accordingly.

## How can I support?

⭐ Star my GitHub repo

🛠 Create pull requests, submit bugs, suggest new features or updates

## Contributing

Contributions to the `vue-mask-next` library are welcome. If you encounter a bug or have an idea for a new feature, please feel free to open an issue or submit a pull request.

<template>
  <input
    ref="maskedInput"
    v-bind="$attrs"
    v-model="value"
    @input="handleInput"
  />
</template>

<script setup>
import { defineProps, defineModel } from "vue";

const props = defineProps({
  mask: {
    type: String,
    required: true,
  },
});

const value = defineModel();

const maskDefinitions = {
  "#": { pattern: /\d/ },
  X: { pattern: /[0-9a-zA-Z]/ },
  S: { pattern: /[a-zA-Z]/ },
  A: { pattern: /[a-zA-Z]/, transform: (v) => v.toLocaleUpperCase() },
  a: { pattern: /[a-zA-Z]/, transform: (v) => v.toLocaleLowerCase() },
  "!": { escape: true },
};

const applyMask = (value, mask) => {
  const maskedValue = [];
  let unmaskedIndex = 0;
  let maskIndex = 0;

  while (unmaskedIndex < value.length && maskIndex < mask.length) {
    const maskChar = mask[maskIndex];
    const unmaskedChar = value[unmaskedIndex];
    const maskDefinition = maskDefinitions[maskChar];

    if (maskDefinition) {
      if (maskDefinition.escape) {
        maskIndex++;
        maskedValue.push(value[unmaskedIndex]);
        unmaskedIndex++;
      } else if (maskDefinition.pattern.test(unmaskedChar)) {
        const transformedChar = maskDefinition.transform
          ? maskDefinition.transform(unmaskedChar)
          : unmaskedChar;
        maskedValue.push(transformedChar);
        unmaskedIndex++;
      } else {
        break;
      }
    } else {
      maskedValue.push(maskChar);
      if (maskChar === unmaskedChar) {
        unmaskedIndex++;
      }
    }
    maskIndex++;
  }

  return maskedValue.join("");
};

const handleInput = (event) => {
  value.value = applyMask(event.target.value, props.mask);
};
</script>

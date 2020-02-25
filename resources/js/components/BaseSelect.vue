<template>
    <label class="block">
        <div
            v-if="lable"
            class="text-sm font-semibold mb-1"
            v-text="lable"
        >
        </div>
        <select 
            class="form-select block w-full bg-gray-200 border border-gray-200 focus:bg-white"             
            @input="$emit('input', $event.target.value)"
        >
            <option 
                v-for="option in options" 
                :key="option.value" 
                :value="option.value"
                v-text="option.name"
                :selected="option.value == value"
                ></option>
        </select>
    </label>
</template>
<script>
export default {
    props: {
        value: null,
        lable: String,
        options: Array,
    }
}
</script>
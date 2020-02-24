<template>
    <div>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Panels</h1>
            <base-panel class="mb-8">
                sai aung naing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, vitae odio. Unde voluptatibus porro ullam eos dolore quis inventore corporis!
            </base-panel>
            <base-panel class="mb-8 flex" no-padding>
                <div class="bg-blue-500 w-64"></div>
                <div class="px-6 py-4 flex-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat aliquid, distinctio quos necessitatibus ratione consectetur facere iure similique earum incidunt, impedit vero tenetur unde! Architecto, reiciendis? Ipsum, eligendi iste? Eos.
                </div>
            </base-panel>
            <base-panel class="mb-8" title="My Title" sub="Some metadata">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione. Ex, dolor error quae sit dignissimos veritatis, necessitatibus quod obcaecati ullam accusantium repellendus, tempore placeat et tenetur quidem culpa voluptates?
            </base-panel>
            <base-panel class="mb-8" title="Leads" sub="325 leads . 1002 opportunities">
                <template #actions>
                    <base-button small>Add new lead</base-button>
                </template>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione. Ex, dolor error quae sit dignissimos veritatis, necessitatibus quod obcaecati ullam accusantium repellendus, tempore placeat et tenetur quidem culpa voluptates?
            </base-panel>
        </section>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Buttons</h1>
            <table class="w-full">
                <tr>
                    <td>Default</td>
                    <td>Danger</td>
                    <td>Primary</td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button @click="sayHi">Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button small>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button disabled>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button disabled danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button disabled primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button small disabled>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small disabled danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small disabled primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button icon="camera">Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button icon="camera" small>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" small danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" small primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button icon="camera" disabled>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" disabled danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" disabled primary>Primary</base-button>
                    </td>
                </tr>

                <tr>
                    <td class="py-6">
                        <base-button icon="camera" small disabled>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" small disabled danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" small disabled primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button loading>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button loading danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button loading primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button loading small>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button loading small danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button loading small primary>Primary</base-button>
                    </td>
                </tr>
            </table>
        </section>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Icons</h1>
            <div class="flex mb-8">
                <base-icon 
                v-for="icon in icons" :key="icon"
                :icon="icon" 
                class="fill-current w-6 h-6 mr-4"
                primary="text-gray-500"       
            ></base-icon>
            </div>
            <div class="flex">
                <base-icon 
                v-for="icon in icons" :key="icon"
                :icon="icon" 
                class="group cursor-pointer fill-current w-6 h-6 mr-4"
                primary="text-blue-300 group-hover:text-blue-500"       
            ></base-icon>
            </div>
        </section>
    </div>
</template>
<script>
import BasePanel from './BasePanel'
import BaseButton from './BaseButton'
import BaseIcon from './BaseIcon'

export default {
    components: {
        BasePanel,
        BaseButton,
        BaseIcon
    },
    data() {
        return {
            icons: [
                'camera', 'application', 'cog', 'histroy', 'link', 'paint', 'trash'
            ]
        }
    },
    methods: {
        sayHi() {
            alert("hi")
        }
    }
}
</script>
<template>
    <div class="mt-5">
        <b-button variant="success">Button</b-button>
        <b-button variant="info">Button</b-button>
        <b-button variant="danger">Button</b-button>
        <b-button variant="warning">Button</b-button>
        <b-button variant="primary">Button</b-button>
        <b-button variant="dark">Button</b-button>

        <b-row class="mt-5">
            <b-col cols="12" md="4">
                <b-card 
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-top
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam impedit non quibusdam qui, rerum molestias ea corporis in saepe officiis hic eos quia eum perferendis tenetur iste eveniet culpa.</p>
                    <b-button variant="dark">Button</b-button>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card 
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-top
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam impedit non quibusdam qui, rerum molestias ea corporis in saepe officiis hic eos quia eum perferendis tenetur iste eveniet culpa.</p>
                    <b-button variant="dark">Button</b-button>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card 
                    img-src="https://picsum.photos/600/300/?image=25"
                    img-top
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam impedit non quibusdam qui, rerum molestias ea corporis in saepe officiis hic eos quia eum perferendis tenetur iste eveniet culpa.</p>
                    <b-button variant="dark">Button</b-button>
                </b-card>
            </b-col>
        </b-row>

    </div>
</template>

<script>
export default {
    name: 'Cards'
}
</script>
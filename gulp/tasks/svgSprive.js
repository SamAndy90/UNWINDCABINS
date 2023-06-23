import svgSprite from "gulp-svg-sprite";

export const svgSprive = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SVG",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite/icons.svg",
                    // render: {
                    //     scss: true,
                    // }
                },
            },
            shape: {
                dimension: {
                    maxWidth: 100,
                    maxHeight: 100,
                },
                spacing: {
                    padding: 0,
                },
                transform: [{
                    svgo: {
                        plugins: [
                            {
                                name: "removeAttrs",
                                params: {
                                    attrs: "(fill|stroke|opacity)",
                                },
                            },
                        ],
                    },
                }],
            },
            // svg: {
            //     dimensionAttributes: false,
            // },
        }))
        .pipe(app.gulp.dest(`${app.path.src.spriteSvg}`));
}
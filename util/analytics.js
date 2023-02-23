import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'

const analytics = Analytics({
    app: 'si-sa-web',
    plugins: [
        googleTagManager({
            containerId: `${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`,
						enabled: true,
        }),
    ]
})

export default analytics
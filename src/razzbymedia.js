import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';

export default class RazzbyMedia extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add( 'RazzbyMedia', locale => {
			const view = new ButtonView( locale );

			view.set( {
				label: 'Insert image',
				icon: imageIcon,
				tooltip: true
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
				vm.$stuff.showImageModal = true;
			} );

			return view;
		} );
	}
}

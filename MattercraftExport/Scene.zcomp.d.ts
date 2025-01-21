import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { PositionalAudio as PositionalAudio_0 } from "@zcomponent/three/lib/components/PositionalAudio";
import { Group as Group_1 } from "@zcomponent/three/lib/components/Group";
import { CameraEnvironmentMap as CameraEnvironmentMap_2 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { DefaultCookieConsent as DefaultCookieConsent_3 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_4 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_5 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { Div as Div_6 } from "@zcomponent/html/lib/div";
import { HTML as HTML_7 } from "@zcomponent/three/lib/components/HTML";
import { ImmersalAnchorGroup as ImmersalAnchorGroup_8 } from "@zcomponent/immersal/lib/components/ImmersalAnchorGroup";
import { Sphere as Sphere_9 } from "@zcomponent/three/lib/components/meshes/Sphere";
import { ShadowPlane as ShadowPlane_10 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { SphereTrigger as SphereTrigger_11 } from "@zcomponent/three/lib/components/physics/triggers/SphereTrigger";
import { PlaySound as PlaySound_12 } from "@zcomponent/core/lib/behaviors/PlaySound";
import { WorldTracker as WorldTracker_13 } from "@zcomponent/zappar-three/lib/components/trackers/WorldTracker";
import { WorldTrackingUI as WorldTrackingUI_14 } from "@zcomponent/zappar-three/lib/components/WorldTrackingUI";
import { ZapparCamera as ZapparCamera_15 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { Audio as Audio_16 } from "@zcomponent/core/lib/components/Audio";
import { CSS as CSS_17 } from "@zcomponent/html/lib/CSS";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		AudienceWoman_mp3: PositionalAudio_0 & {
			behaviors: {

			}
		},
		Audios: Group_1 & {
			behaviors: {

			}
		},
		CameraEnvironmentMap: CameraEnvironmentMap_2 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_3 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_4 & {
			behaviors: {

			}
		},
		Defaults: Group_1 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_5 & {
			behaviors: {

			}
		},
		Div: Div_6 & {
			behaviors: {

			}
		},
		HTML: HTML_7 & {
			behaviors: {

			}
		},
		ImmersalAnchorGroup: ImmersalAnchorGroup_8 & {
			behaviors: {

			}
		},
		News_Report_mp3: PositionalAudio_0 & {
			behaviors: {

			}
		},
		No_RoadsNoCars_mp3: PositionalAudio_0 & {
			behaviors: {

			}
		},
		Protest: Sphere_9 & {
			behaviors: {

			}
		},
		Protest_Discussion: Sphere_9 & {
			behaviors: {

			}
		},
		Protest_Discussion_mp30: PositionalAudio_0 & {
			behaviors: {

			}
		},
		Protest_mp3: PositionalAudio_0 & {
			behaviors: {

			}
		},
		Robert: Sphere_9 & {
			behaviors: {

			}
		},
		Robert_mp3: PositionalAudio_0 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_10 & {
			behaviors: {

			}
		},
		Song: Sphere_9 & {
			behaviors: {

			}
		},
		SphereTrigger: SphereTrigger_11 & {
			behaviors: {
				0: PlaySound_12,
				PlaySound: PlaySound_12,
			}
		},
		SphereTrigger0: SphereTrigger_11 & {
			behaviors: {
				0: PlaySound_12,
				PlaySound: PlaySound_12,
			}
		},
		TV: Sphere_9 & {
			behaviors: {

			}
		},
		TV_SALESMAN_mp4: PositionalAudio_0 & {
			behaviors: {

			}
		},
		Travel: Sphere_9 & {
			behaviors: {

			}
		},
		Travel_mp4: PositionalAudio_0 & {
			behaviors: {

			}
		},
		WorldTracker: WorldTracker_13 & {
			behaviors: {

			}
		},
		WorldTrackingUI: WorldTrackingUI_14 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_15 & {
			behaviors: {

			}
		},
		fullscreenOverlay: Div_6 & {
			behaviors: {

			}
		},
		n022901_central_park67862_mp3: Audio_16 & {
			behaviors: {

			}
		},
		style_css: CSS_17 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;

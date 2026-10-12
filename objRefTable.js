const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.Compare
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{MULAI: 0},
	{KELUAR: 0},
	{Sprite4: 0},
	{Text: 0},
	{Sprite5: 0},
	{Mouse: 0},
	{Sprite6: 0},
	{skor: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	MULAI: class extends self.IButtonInstance {},
	KELUAR: class extends self.IButtonInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite6: class extends self.ISpriteInstance {}
}
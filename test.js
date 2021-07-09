<script type="text/javascript" src="lakshmivalues.json"></script>
<script type="text/javascript src=""javascript.js>
//this line of code is required only if the json file is in a string format otherwise below line of code will be used -- //var bmiJsons ==JSON.parse(Lakshmi);
var lakJsons = Lakshmi;
var count = 0;

for(var i=0; i<lakJsons.length; i++){
	var lakJson = lakJsons[i];
	var BMIrange = 0;
	var height = 0;
	var weight = 0;

	for(var j in lakJson){
		var lakvalue = lakJson[j];
		var lakkey = j;
		if(typeof lakkey == "string" && lakkey == "HeightCm" && typeof lakvalue == "number" && lakvalue !=0){
			height = lakvalue/100;
		} 
		if(typeof lakkey == "string" && lakkey == "WeightKg" && typeof lakvalue == "number" && lakvalue !=0){
			weight = lakvalue;
		} 
	}
	if(height != 0 || height != null || weight !=0 || weight != null){
		Lakshmirange = weight/height;
	}
	if(Lakshmirange >= 25 && BMIrange <=29.9){
		count = count+1;
	}
}
alert("count ->"+count);
</script>



Summary:

If the json data is small then we may include it in the script file itself instead of the file, we load the json data.
If the the json data is huge then we store it in a json file and read it like above. Json file will look like 
Lakshmi = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166, 
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", 
"HeightCm": 167, "WeightKg": 82} ]

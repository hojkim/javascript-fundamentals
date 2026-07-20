// converts object's weight to kg if it is originally in lb and returns a new object with the updated weight value
const normalizeUnits = (manifest) => {
   const converted = { ...manifest };
   if (converted.unit === "lb") {
      converted.unit = "kg";
      converted.weight *= 0.45;
   }
   return converted;
};

// checks all property values of a provided object and returns a new object with properties if their values are invalid or missing
const validateManifest = (manifest) => {
   const validated = {};
   if (manifest.containerId === undefined) {
      validated.containerId = "Missing";
   } else if (
      Number.isInteger(manifest.containerId) !== true ||
      manifest.containerId <= 0
   ) {
      validated.containerId = "Invalid";
   }
   if (manifest.destination === undefined) {
      validated.destination = "Missing";
   } else if (
      typeof manifest.destination !== "string" ||
      manifest.destination.trim() === ""
   ) {
      validated.destination = "Invalid";
   }
   if (manifest.weight === undefined) {
      validated.weight = "Missing";
   } else if (
      Number.isInteger(manifest.weight) !== true ||
      Number.isNaN(manifest.weight) === true ||
      manifest.weight <= 0
   ) {
      validated.weight = "Invalid";
   }
   if (manifest.unit === undefined) {
      validated.unit = "Missing";
   } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
      validated.unit = "Invalid";
   }
   if (manifest.hazmat === undefined) {
      validated.hazmat = "Missing";
   } else if (manifest.hazmat !== true && manifest.hazmat !== false) {
      validated.hazmat = "Invalid";
   }
   return validated;
};

// console logs whether the parameter object is valid or not
const processManifest = (manifest) => {
   const validated = validateManifest(manifest);
   const normalized = normalizeUnits(manifest);
   if (Object.keys(validated).length === 0) {
      console.log(`Validation success: ${manifest.containerId}`);
      console.log(`Total weight: ${normalized.weight} kg`);
   } else {
      console.log(`Validation error: ${manifest.containerId}`);
      console.log(validated);
   }
};

const test1 = {
   containerId: 48,
   destination: "Florida",
   weight: 117,
   unit: "lb",
   hazmat: false,
};

const test2 = {
   containerId: 1,
   destination: "Maldives",
   weight: 304,
   unit: "kg",
   hazmat: true,
};

const test3 = {
   containerId: null,
   destination: "Santa Barbara",
   weight: 304,
   unit: "kg",
   hazmat: false,
};

const test4 = {
   containerId: 0,
   destination: 222,
   weight: -27,
   unit: "pounds",
   hazmat: "yes",
};

const test5 = { destination: "  " };
const test6 = { weight: NaN };
const test7 = { containerId: -88, destination: "Soledad", weight: NaN };

console.log(normalizeUnits(test1));
console.log(validateManifest(test2));
console.log(validateManifest(test3));
console.log(validateManifest(test4));
console.log(validateManifest(test5));
console.log(validateManifest(test6));
console.log(validateManifest({}));
console.log(processManifest(test1));
console.log(processManifest(test2));
console.log(processManifest(test7));

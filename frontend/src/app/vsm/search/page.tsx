// "use client";
// import {
//   Autocomplete,
//   AutocompleteOption,
//   ListItemText,
// } from "@ocean-network-express/magenta-react";
// import {
//   ContainerDangerousOutline,
//   ContainerDryOutline,
//   ContainerFlatrackOutline,
//   ContainerOpenTopOutline,
//   ContainerPalletOutline,
//   ContainerReeferOutline,
//   ContainerTankOutline,
//   CraneContainerOutline,
// } from "@ocean-network-express/magenta-react-icons";
// import React from "react";

// export default function Search() {
//   return (
//     <div>
//       <Autocomplete
//         helperText="Helper Text"
//         items={[
//           {
//             icon: <ContainerDangerousOutline />,
//             label: "Dangerous Container with long label",
//             value: "1",
//           },
//           {
//             icon: <ContainerDryOutline />,
//             label: "Dry Container",
//             value: "2",
//           },
//           {
//             icon: <ContainerFlatrackOutline />,
//             label: "Flatrack Container",
//             value: "3",
//           },
//           {
//             icon: <ContainerTankOutline />,
//             label: "Tank Container",
//             value: "4",
//           },
//           {
//             icon: <CraneContainerOutline />,
//             label: "Crane Container",
//             value: "5",
//           },
//           {
//             icon: <ContainerOpenTopOutline />,
//             label: "Open top container",
//             value: "6",
//           },
//           {
//             icon: <ContainerPalletOutline />,
//             label: "Pallet container",
//             value: "7",
//           },
//           {
//             disabled: true,
//             icon: <ContainerReeferOutline />,
//             label: "Reefer Container",
//             value: "8",
//           },
//         ]}
//         label="Multiple select"
//         limitTagsIdle
//         multiple
//         onValueChange={function noRefCheck() {}}
//         placeholder="Choose options"
//         style={{
//           width: "450px",
//         }}
//         value={["1", "3", "4"]}
//       >
//         <AutocompleteOption
//           item={{
//             icon: <ContainerDangerousOutline />,
//             label: "Dangerous Container with long label",
//             value: "1",
//           }}
//         >
//           <ListItemText primaryText="Dangerous Container with long label" />
//         </AutocompleteOption>
//         <AutocompleteOption
//           item={{
//             icon: <ContainerDryOutline />,
//             label: "Dry Container",
//             value: "2",
//           }}
//         >
//           <ListItemText primaryText="Dry Container" />
//         </AutocompleteOption>
//         <AutocompleteOption
//           item={{
//             icon: <ContainerFlatrackOutline />,
//             label: "Flatrack Container",
//             value: "3",
//           }}
//         >
//           <ListItemText primaryText="Flatrack Container" />
//         </AutocompleteOption>
//         <AutocompleteOption
//           item={{
//             icon: <ContainerTankOutline />,
//             label: "Tank Container",
//             value: "4",
//           }}
//         >
//           <ListItemText primaryText="Tank Container" />
//         </AutocompleteOption>
//         <AutocompleteOption
//           item={{
//             icon: <CraneContainerOutline />,
//             label: "Crane Container",
//             value: "5",
//           }}
//         >
//           <ListItemText primaryText="Crane Container" />
//         </AutocompleteOption>
//         <AutocompleteOption
//           item={{
//             icon: <ContainerOpenTopOutline />,
//             label: "Open top container",
//             value: "6",
//           }}
//         >
//           <ListItemText primaryText="Open top container" />
//         </AutocompleteOption>
//         <AutocompleteOption
//           item={{
//             icon: <ContainerPalletOutline />,
//             label: "Pallet container",
//             value: "7",
//           }}
//         >
//           <ListItemText primaryText="Pallet container" />
//         </AutocompleteOption>
//         <AutocompleteOption
//           item={{
//             disabled: true,
//             icon: <ContainerReeferOutline />,
//             label: "Reefer Container",
//             value: "8",
//           }}
//         >
//           <ListItemText primaryText="Reefer Container" />
//         </AutocompleteOption>
//       </Autocomplete>
//     </div>
//   );
// }

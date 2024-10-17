import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import Modal from "./Modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const patients = [
  {
    id: "275",
    uid: "AMNEU94315",
    name: "Bharat",
    gender: "Male",
    email: "kiranm9012@gmail.com",
    mobile: "9819364525",
    parent: "Ravaria",
    doctor: "Vinod M Vijan",
  },
  {
    id: "4",
    uid: "VPFLY52911",
    name: "Bharath Testing",
    gender: "Female",
    email: "kiranm9012@gmail.com",
    mobile: "9819364525",
    parent: "Ravaria",
    doctor: "Vikrant V Vijan",
  },
  {
    id: "163",
    uid: "HTOQC14247",
    name: "Agastya Pandey",
    gender: "Male",
    email: "",
    mobile: "8905889633",
    parent: "Mr Pandey",
    doctor: "Sidhant Kakade",
  },
  {
    id: "1",
    uid: "RUOMU97937",
    name: "Bharat Ravaria",
    gender: "Male",
    email: "",
    mobile: "9833562854",
    parent: "",
    doctor: "Vinod M Vijan",
  },
  {
    id: "2",
    uid: "UJGDM39693",
    name: "Pallavi Gaikwad",
    gender: "Female",
    email: "",
    mobile: "9960076295",
    parent: "",
    doctor: "Vinod M Vijan",
  },
  {
    id: "3",
    uid: "CSOWJ16074",
    name: "Abhidhya Medhe",
    gender: "Female",
    email: "",
    mobile: "9960939377",
    parent: "",
    doctor: "Vinod M Vijan",
  },
  {
    id: "5",
    uid: "SNTBQ46374",
    name: "Rayanchand Shinde",
    gender: "Male",
    email: "",
    mobile: "9322626318",
    parent: "",
    doctor: "Shankar Mundhe",
  },
  {
    id: "6",
    uid: "ZQCIF27050",
    name: "Lalchand Vishwakarma",
    gender: "Male",
    email: "",
    mobile: "9822436510",
    parent: "Pradeep Vishwakarma",
    doctor: "Vinod M Vijan",
  },
  {
    id: "7",
    uid: "ESJNV09850",
    name: "Sangita Prakash Kale",
    gender: "Female",
    email: "",
    mobile: "9823789191",
    parent: "Prasad Kale",
    doctor: "Vinod M Vijan",
  },
  {
    id: "8",
    uid: "VGFTF36942",
    name: "Chandan Kumar",
    gender: "Male",
    email: "",
    mobile: "9825119079",
    parent: "",
    doctor: "Vinod M Vijan",
  },
  {
    id: "9",
    uid: "ZEGON20520",
    name: "Sunil Tonape",
    gender: "Male",
    email: "",
    mobile: "9823027522",
    parent: "",
    doctor: "Sidhant Kakade",
  },
];

export default function Patients() {
  const [showModal, setShowModal] = useState(false);

  const handleAddPatientClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Patients Listing</h2>
          <Button variant="outline" onClick={handleAddPatientClick}>
            + Add Patient
          </Button>
        </div>
        <div className="flex space-x-2">
          <Select defaultValue="Patient Name">
            <Select.Trigger className="w-[180px]">
              <Select.Value placeholder="Search By" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="Patient Name">Patient Name</Select.Item>
              <Select.Item value="UID">UID</Select.Item>
              <Select.Item value="Mobile">Mobile</Select.Item>
            </Select.Content>
          </Select>
          <Input type="text" placeholder="Search..." className="flex-0" />
          <Button className="bg-blue-500 text-white">Search</Button>
          <Button variant="outline">Reset Search</Button>
        </div>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Clinic Specific ID</TableHead>
                <TableHead>UID</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Parent</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell>{patient.id}</TableCell>
                  <TableCell>{patient.uid}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.email}</TableCell>
                  <TableCell>{patient.mobile}</TableCell>
                  <TableCell>{patient.parent}</TableCell>
                  <TableCell>{patient.doctor}</TableCell>
                  <TableCell>
                    <Button variant="outline">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Modal for Adding a Patient */}
      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="grid grid-cols-2 gap-4">
          {/* Section 1 */}
          <div>
            <Input label="Patient Name" placeholder="Enter patient name" />
            <Input label="UID" placeholder="Enter UID" />
            <Input label="Mobile" placeholder="Enter mobile number" />
          </div>

          {/* Section 2 */}
          <div>
            <Select label="Gender">
              <Select.Item value="Male">Male</Select.Item>
              <Select.Item value="Female">Female</Select.Item>
            </Select>
            <Input label="Parent Name" placeholder="Enter parent name" />
            <Input label="Doctor Name" placeholder="Enter doctor name" />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <Button className="bg-blue-500 text-white">Save Patient</Button>
        </div>
      </Modal>
    </div>
  );
}

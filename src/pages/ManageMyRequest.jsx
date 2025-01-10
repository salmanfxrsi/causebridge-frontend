import { useEffect } from "react";
import MyReqTable from "../components/MyReqTable";

const ManageMyRequest = () => {
  useEffect(() => {
      document.title = " My Requests | CauseBridge";
    }, []);

  return (
    <div>
      <section className="py-24 container mx-auto">
        <div>
          <MyReqTable></MyReqTable>
        </div>
      </section>
    </div>
  );
};

export default ManageMyRequest;

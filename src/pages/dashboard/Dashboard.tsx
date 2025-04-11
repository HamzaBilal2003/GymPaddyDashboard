import React from "react";
import Horizontal from "../../components/alignments/Horizontal";
import { dashboardStatics, latestUsers } from "../../constants/Data";
import StatsCard from "../../components/StatsCard";
import SiteStatisticsChart from "./components/SiteStatisticsChart";
import Button from "../../components/Buttons/Button";
import Vertical from "../../components/alignments/Vertical";
import PostCan from "../../components/PostCan";
import TableCan from "../../components/TableCan";
import LatestUserRow from "./components/LatestUserRow";

const Dashboard: React.FC = () => {
  const postData = [
    {
      "Description": "John Doe commented on your post.",
      "time": "Just now"
    },
    {
      "Description": "Your order #1024 has been shipped.",
      "time": "5 minutes ago"
    },
    {
      "Description": "New user registered: alice@example.com",
      "time": "10 minutes ago"
    },
    {
      "Description": "System backup completed successfully.",
      "time": "30 minutes ago"
    },
    {
      "Description": "You received a new message from Sarah.",
      "time": "1 hour ago"
    },
    {
      "Description": "Password changed successfully.",
      "time": "2 hours ago"
    },
    {
      "Description": "Meeting scheduled with the marketing team.",
      "time": "3 hours ago"
    },
    {
      "Description": "Invoice #5678 has been generated.",
      "time": "6 hours ago"
    },
    {
      "Description": "Database maintenance completed.",
      "time": "9 hours ago"
    },
    {
      "Description": "Reminder: Project deadline is tomorrow.",
      "time": "12 hours ago"
    },
    {
      "Description": "Emma uploaded a new document to the shared folder.",
      "time": "18 hours ago"
    },
    {
      "Description": "You were mentioned in a comment by Michael.",
      "time": "1 day ago"
    },
    {
      "Description": "New blog post published: 'Top 10 UI Tips'.",
      "time": "2 days ago"
    },
    {
      "Description": "Weekly newsletter sent to all subscribers.",
      "time": "3 days ago"
    }
  ]


  return (
    <Horizontal>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {
          dashboardStatics.map((item, index) => (
            <StatsCard {...item} key={index} />
          ))
        }
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-1 lg:col-span-8 ">
          <h2 className="text-2xl font-semibold  flex items-center gap-2 py-4 pb-4">
            Users Statistic
          </h2>
          <div className="p-4 w-full h-[400px] overflow-hidden bg-white rounded-lg shadow-lg border border-gray-300">
            <SiteStatisticsChart />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <Vertical>
            <h2 className="text-2xl font-semibold  flex items-center gap-2 py-4 pb-4">
              Latest Posts
            </h2>
            <Button>
              View All
            </Button>
          </Vertical>
          <div className="p-1 w-full h-[400px] overflow-auto bg-white rounded-lg shadow-lg border border-gray-300 divide-gray-200">
            {
              postData.map((item, index) => (
                <PostCan key={index} {...item} />
              ))
            }
          </div>
        </div>
      </div>


      <div className="space-y-4">
        <h1 className="text-2xl">Latest Users</h1>
        <TableCan
          headerTr={[
            "Full Name",
            "Username",
            "Email",
            "Phone number",
            "Age",
            "Last login",
            "Action"
          ]
          }
          dataTr={latestUsers}
          TrName={LatestUserRow}
        />
      </div>
    </Horizontal>
  );
};

export default Dashboard;

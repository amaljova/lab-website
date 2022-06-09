import ApprovalRoundedIcon from '@mui/icons-material/ApprovalRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';

const Approval = < ApprovalRoundedIcon / > ;
const Lab = < AccountBalanceRoundedIcon / > ;
const Collab = < GroupsRoundedIcon / > ;
const Data = < StorageRoundedIcon / > ;

export const milestonesData = [{
        title: "Approval- DBT Wellcome Trust",
        year: "2019",
        icon: Approval,
    },
    {
        title: "Quantitative Imaging and AI Lab",
        year: "2020",
        icon: Lab,

    },
    {
        title: "Approval- I-DAIR",
        year: "2021",
        icon: Collab,

    },
    {
        title: "Multi-institutional Collaborations",
        year: "2022",
        icon: Data,

    },

];